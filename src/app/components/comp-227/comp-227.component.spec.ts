/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp227Component } from './comp-227.component';

describe('Comp227Component', () => {
  let component: Comp227Component;
  let fixture: ComponentFixture<Comp227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
