/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4274Component } from './comp-4274.component';

describe('Comp4274Component', () => {
  let component: Comp4274Component;
  let fixture: ComponentFixture<Comp4274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
