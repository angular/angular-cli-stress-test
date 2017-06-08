/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service144Service } from './service-144.service';

describe('Service144Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service144Service]
    });
  });

  it('should ...', inject([Service144Service], (service: Service144Service) => {
    expect(service).toBeTruthy();
  }));
});
