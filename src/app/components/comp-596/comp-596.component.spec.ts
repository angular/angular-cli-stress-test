/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp596Component } from './comp-596.component';

describe('Comp596Component', () => {
  let component: Comp596Component;
  let fixture: ComponentFixture<Comp596Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp596Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp596Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
