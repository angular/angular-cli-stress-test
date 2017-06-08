/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp220Component } from './comp-220.component';

describe('Comp220Component', () => {
  let component: Comp220Component;
  let fixture: ComponentFixture<Comp220Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp220Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp220Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
