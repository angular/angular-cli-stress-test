/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp654Component } from './comp-654.component';

describe('Comp654Component', () => {
  let component: Comp654Component;
  let fixture: ComponentFixture<Comp654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
