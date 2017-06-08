/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1240Component } from './comp-1240.component';

describe('Comp1240Component', () => {
  let component: Comp1240Component;
  let fixture: ComponentFixture<Comp1240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
