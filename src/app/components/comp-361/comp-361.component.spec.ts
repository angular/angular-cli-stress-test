/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp361Component } from './comp-361.component';

describe('Comp361Component', () => {
  let component: Comp361Component;
  let fixture: ComponentFixture<Comp361Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp361Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp361Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
