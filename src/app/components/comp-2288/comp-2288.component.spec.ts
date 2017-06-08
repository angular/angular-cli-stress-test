/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2288Component } from './comp-2288.component';

describe('Comp2288Component', () => {
  let component: Comp2288Component;
  let fixture: ComponentFixture<Comp2288Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2288Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2288Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
