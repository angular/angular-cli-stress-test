/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1990Component } from './comp-1990.component';

describe('Comp1990Component', () => {
  let component: Comp1990Component;
  let fixture: ComponentFixture<Comp1990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
