/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp448Component } from './comp-448.component';

describe('Comp448Component', () => {
  let component: Comp448Component;
  let fixture: ComponentFixture<Comp448Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp448Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp448Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
