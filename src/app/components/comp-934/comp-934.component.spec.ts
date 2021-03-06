/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp934Component } from './comp-934.component';

describe('Comp934Component', () => {
  let component: Comp934Component;
  let fixture: ComponentFixture<Comp934Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp934Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
