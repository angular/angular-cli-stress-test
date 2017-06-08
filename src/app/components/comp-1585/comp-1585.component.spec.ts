/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1585Component } from './comp-1585.component';

describe('Comp1585Component', () => {
  let component: Comp1585Component;
  let fixture: ComponentFixture<Comp1585Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1585Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1585Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
