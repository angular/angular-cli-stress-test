/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2614Component } from './comp-2614.component';

describe('Comp2614Component', () => {
  let component: Comp2614Component;
  let fixture: ComponentFixture<Comp2614Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2614Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2614Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
