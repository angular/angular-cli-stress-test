/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp134Component } from './comp-134.component';

describe('Comp134Component', () => {
  let component: Comp134Component;
  let fixture: ComponentFixture<Comp134Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp134Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp134Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
