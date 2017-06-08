/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4227Component } from './comp-4227.component';

describe('Comp4227Component', () => {
  let component: Comp4227Component;
  let fixture: ComponentFixture<Comp4227Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4227Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4227Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
