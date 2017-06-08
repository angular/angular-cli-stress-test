/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp776Component } from './comp-776.component';

describe('Comp776Component', () => {
  let component: Comp776Component;
  let fixture: ComponentFixture<Comp776Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp776Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp776Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
