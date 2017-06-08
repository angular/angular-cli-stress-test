/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2577Component } from './comp-2577.component';

describe('Comp2577Component', () => {
  let component: Comp2577Component;
  let fixture: ComponentFixture<Comp2577Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2577Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2577Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
