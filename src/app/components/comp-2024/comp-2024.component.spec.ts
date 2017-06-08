/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2024Component } from './comp-2024.component';

describe('Comp2024Component', () => {
  let component: Comp2024Component;
  let fixture: ComponentFixture<Comp2024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
