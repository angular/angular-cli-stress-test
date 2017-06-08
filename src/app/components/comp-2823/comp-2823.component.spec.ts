/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2823Component } from './comp-2823.component';

describe('Comp2823Component', () => {
  let component: Comp2823Component;
  let fixture: ComponentFixture<Comp2823Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2823Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2823Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
