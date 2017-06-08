/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2252Component } from './comp-2252.component';

describe('Comp2252Component', () => {
  let component: Comp2252Component;
  let fixture: ComponentFixture<Comp2252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
