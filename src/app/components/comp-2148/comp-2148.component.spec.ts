/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2148Component } from './comp-2148.component';

describe('Comp2148Component', () => {
  let component: Comp2148Component;
  let fixture: ComponentFixture<Comp2148Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2148Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2148Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
