/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2098Component } from './comp-2098.component';

describe('Comp2098Component', () => {
  let component: Comp2098Component;
  let fixture: ComponentFixture<Comp2098Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2098Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2098Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
