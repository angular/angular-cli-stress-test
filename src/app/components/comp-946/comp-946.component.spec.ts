/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp946Component } from './comp-946.component';

describe('Comp946Component', () => {
  let component: Comp946Component;
  let fixture: ComponentFixture<Comp946Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp946Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp946Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
