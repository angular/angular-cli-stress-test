/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp943Component } from './comp-943.component';

describe('Comp943Component', () => {
  let component: Comp943Component;
  let fixture: ComponentFixture<Comp943Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp943Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp943Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
