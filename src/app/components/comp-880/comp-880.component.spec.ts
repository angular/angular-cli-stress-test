/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp880Component } from './comp-880.component';

describe('Comp880Component', () => {
  let component: Comp880Component;
  let fixture: ComponentFixture<Comp880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
