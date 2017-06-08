/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2514Component } from './comp-2514.component';

describe('Comp2514Component', () => {
  let component: Comp2514Component;
  let fixture: ComponentFixture<Comp2514Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2514Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2514Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
