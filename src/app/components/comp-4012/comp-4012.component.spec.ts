/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4012Component } from './comp-4012.component';

describe('Comp4012Component', () => {
  let component: Comp4012Component;
  let fixture: ComponentFixture<Comp4012Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4012Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4012Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
