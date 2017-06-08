/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service933Service } from './service-933.service';

describe('Service933Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service933Service]
    });
  });

  it('should ...', inject([Service933Service], (service: Service933Service) => {
    expect(service).toBeTruthy();
  }));
});
