/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp113Component } from './comp-113.component';

describe('Comp113Component', () => {
  let component: Comp113Component;
  let fixture: ComponentFixture<Comp113Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp113Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp113Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
