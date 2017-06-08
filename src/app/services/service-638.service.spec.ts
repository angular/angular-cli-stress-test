/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service638Service } from './service-638.service';

describe('Service638Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service638Service]
    });
  });

  it('should ...', inject([Service638Service], (service: Service638Service) => {
    expect(service).toBeTruthy();
  }));
});
