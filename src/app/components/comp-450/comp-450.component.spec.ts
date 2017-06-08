/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp450Component } from './comp-450.component';

describe('Comp450Component', () => {
  let component: Comp450Component;
  let fixture: ComponentFixture<Comp450Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp450Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp450Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
