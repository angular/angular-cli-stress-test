/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4352Component } from './comp-4352.component';

describe('Comp4352Component', () => {
  let component: Comp4352Component;
  let fixture: ComponentFixture<Comp4352Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4352Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4352Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
