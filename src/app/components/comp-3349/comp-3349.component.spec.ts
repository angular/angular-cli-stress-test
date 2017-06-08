/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3349Component } from './comp-3349.component';

describe('Comp3349Component', () => {
  let component: Comp3349Component;
  let fixture: ComponentFixture<Comp3349Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3349Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3349Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
