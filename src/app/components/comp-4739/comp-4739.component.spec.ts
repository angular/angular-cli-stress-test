/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4739Component } from './comp-4739.component';

describe('Comp4739Component', () => {
  let component: Comp4739Component;
  let fixture: ComponentFixture<Comp4739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
