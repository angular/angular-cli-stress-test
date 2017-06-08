/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3850Component } from './comp-3850.component';

describe('Comp3850Component', () => {
  let component: Comp3850Component;
  let fixture: ComponentFixture<Comp3850Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3850Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3850Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
