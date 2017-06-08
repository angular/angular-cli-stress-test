/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2666Component } from './comp-2666.component';

describe('Comp2666Component', () => {
  let component: Comp2666Component;
  let fixture: ComponentFixture<Comp2666Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2666Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
