/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp957Component } from './comp-957.component';

describe('Comp957Component', () => {
  let component: Comp957Component;
  let fixture: ComponentFixture<Comp957Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp957Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp957Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
