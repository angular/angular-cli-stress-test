/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp68Component } from './comp-68.component';

describe('Comp68Component', () => {
  let component: Comp68Component;
  let fixture: ComponentFixture<Comp68Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp68Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp68Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
