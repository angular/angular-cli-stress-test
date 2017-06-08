/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp770Component } from './comp-770.component';

describe('Comp770Component', () => {
  let component: Comp770Component;
  let fixture: ComponentFixture<Comp770Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp770Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp770Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
