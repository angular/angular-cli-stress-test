/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4622Component } from './comp-4622.component';

describe('Comp4622Component', () => {
  let component: Comp4622Component;
  let fixture: ComponentFixture<Comp4622Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4622Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
