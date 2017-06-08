/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1171Component } from './comp-1171.component';

describe('Comp1171Component', () => {
  let component: Comp1171Component;
  let fixture: ComponentFixture<Comp1171Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1171Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1171Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
