/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2016Component } from './comp-2016.component';

describe('Comp2016Component', () => {
  let component: Comp2016Component;
  let fixture: ComponentFixture<Comp2016Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2016Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2016Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
