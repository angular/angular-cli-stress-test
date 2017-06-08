/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp26Component } from './comp-26.component';

describe('Comp26Component', () => {
  let component: Comp26Component;
  let fixture: ComponentFixture<Comp26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
