/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp252Component } from './comp-252.component';

describe('Comp252Component', () => {
  let component: Comp252Component;
  let fixture: ComponentFixture<Comp252Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp252Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp252Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
