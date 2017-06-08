/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1952Component } from './comp-1952.component';

describe('Comp1952Component', () => {
  let component: Comp1952Component;
  let fixture: ComponentFixture<Comp1952Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1952Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1952Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
