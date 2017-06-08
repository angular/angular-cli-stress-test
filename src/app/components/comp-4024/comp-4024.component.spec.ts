/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4024Component } from './comp-4024.component';

describe('Comp4024Component', () => {
  let component: Comp4024Component;
  let fixture: ComponentFixture<Comp4024Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4024Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
