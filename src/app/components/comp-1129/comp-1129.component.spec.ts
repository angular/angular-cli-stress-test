/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1129Component } from './comp-1129.component';

describe('Comp1129Component', () => {
  let component: Comp1129Component;
  let fixture: ComponentFixture<Comp1129Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1129Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1129Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
