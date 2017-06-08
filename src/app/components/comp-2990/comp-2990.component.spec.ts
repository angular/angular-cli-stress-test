/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2990Component } from './comp-2990.component';

describe('Comp2990Component', () => {
  let component: Comp2990Component;
  let fixture: ComponentFixture<Comp2990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
