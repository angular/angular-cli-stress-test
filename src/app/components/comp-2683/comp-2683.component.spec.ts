/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2683Component } from './comp-2683.component';

describe('Comp2683Component', () => {
  let component: Comp2683Component;
  let fixture: ComponentFixture<Comp2683Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2683Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2683Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
