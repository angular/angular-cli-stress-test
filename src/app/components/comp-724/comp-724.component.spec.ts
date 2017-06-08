/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp724Component } from './comp-724.component';

describe('Comp724Component', () => {
  let component: Comp724Component;
  let fixture: ComponentFixture<Comp724Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp724Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp724Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
