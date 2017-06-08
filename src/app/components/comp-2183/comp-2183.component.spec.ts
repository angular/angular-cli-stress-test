/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2183Component } from './comp-2183.component';

describe('Comp2183Component', () => {
  let component: Comp2183Component;
  let fixture: ComponentFixture<Comp2183Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2183Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
