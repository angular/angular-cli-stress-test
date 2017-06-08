/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp575Component } from './comp-575.component';

describe('Comp575Component', () => {
  let component: Comp575Component;
  let fixture: ComponentFixture<Comp575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
